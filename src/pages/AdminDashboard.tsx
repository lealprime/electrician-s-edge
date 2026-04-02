import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LogOut, Trash2, RefreshCw, Calendar } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type Agendamento = Tables<"agendamentos">;

const statusOptions = [
  { value: "pendente", label: "Pendente", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  { value: "confirmado", label: "Confirmado", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  { value: "cancelado", label: "Cancelado", color: "bg-red-500/20 text-red-400 border-red-500/30" },
  { value: "concluido", label: "Concluído", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
];

const AdminDashboard = () => {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchAgendamentos = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("agendamentos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erro ao buscar agendamentos:", error);
    } else {
      setAgendamentos(data || []);
    }
    setLoading(false);
  };

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/admin/login");
      return;
    }

    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin");

    if (!roles || roles.length === 0) {
      await supabase.auth.signOut();
      navigate("/admin/login");
      return;
    }

    fetchAgendamentos();
  };

  useEffect(() => {
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") {
        navigate("/admin/login");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from("agendamentos")
      .update({ status: newStatus })
      .eq("id", id);

    if (!error) {
      setAgendamentos((prev) =>
        prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
      );
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Tem certeza que deseja excluir este agendamento?")) return;

    const { error } = await supabase
      .from("agendamentos")
      .delete()
      .eq("id", id);

    if (!error) {
      setAgendamentos((prev) => prev.filter((a) => a.id !== id));
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const getStatusStyle = (status: string) => {
    return statusOptions.find((s) => s.value === status)?.color || "bg-muted text-muted-foreground";
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">
              Painel de Agendamentos
            </h1>
            <Badge variant="secondary" className="ml-2">
              {agendamentos.length} total
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={fetchAgendamentos}
              className="border-border"
            >
              <RefreshCw className="h-4 w-4 mr-1" />
              Atualizar
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-muted-foreground hover:text-destructive"
            >
              <LogOut className="h-4 w-4 mr-1" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto p-6">
        {loading ? (
          <div className="text-center py-20 text-muted-foreground">
            Carregando agendamentos...
          </div>
        ) : agendamentos.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            Nenhum agendamento encontrado.
          </div>
        ) : (
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-card hover:bg-card">
                  <TableHead className="text-foreground font-semibold">Nome</TableHead>
                  <TableHead className="text-foreground font-semibold">Telefone</TableHead>
                  <TableHead className="text-foreground font-semibold">Email</TableHead>
                  <TableHead className="text-foreground font-semibold">CEP</TableHead>
                  <TableHead className="text-foreground font-semibold">Descrição</TableHead>
                  <TableHead className="text-foreground font-semibold">Data</TableHead>
                  <TableHead className="text-foreground font-semibold">Status</TableHead>
                  <TableHead className="text-foreground font-semibold text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {agendamentos.map((ag) => (
                  <TableRow key={ag.id} className="border-border">
                    <TableCell className="font-medium text-foreground">{ag.nome}</TableCell>
                    <TableCell className="text-muted-foreground">{ag.telefone}</TableCell>
                    <TableCell className="text-muted-foreground">{ag.email || "—"}</TableCell>
                    <TableCell className="text-muted-foreground">{ag.cep || "—"}</TableCell>
                    <TableCell className="text-muted-foreground max-w-[200px] truncate">
                      {ag.descricao}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {formatDate(ag.created_at)}
                    </TableCell>
                    <TableCell>
                      <Select
                        value={ag.status}
                        onValueChange={(val) => handleStatusChange(ag.id, val)}
                      >
                        <SelectTrigger className="w-[130px] h-8 text-xs border-border">
                          <SelectValue>
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${getStatusStyle(ag.status)}`}>
                              {statusOptions.find((s) => s.value === ag.status)?.label || ag.status}
                            </span>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {statusOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(ag.id)}
                        className="text-muted-foreground hover:text-destructive h-8 w-8"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
