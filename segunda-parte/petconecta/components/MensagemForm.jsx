/** Caixa de confirmação ou erro que aparece abaixo dos formulários. */
export default function MensagemForm({ status, mensagem }) {
  if (status !== "sucesso" && status !== "erro") return null;
  return (
    <p className={`mensagem-form ${status}`} role={status === "erro" ? "alert" : "status"}>
      {mensagem}
    </p>
  );
}
