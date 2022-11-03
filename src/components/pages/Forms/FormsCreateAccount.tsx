import { TabsContent } from "@radix-ui/react-tabs";
import { Pen, At, Key } from "phosphor-react";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Form } from "./styles";

export function FormsCreateAccount() {
  return (
    <TabsContent value="create">
      <Form>
        <h2>Cadastra-se</h2>
        <Input
          type="text"
          textLabel="Name"
          name="name"
          id="name"
          icon={<Pen size={24} weight="regular" />}
          required
          tooltip
          tooltipText="Your name"
        />
        <Input
          type="email"
          textLabel="E-mail"
          name="email"
          id="email"
          icon={<At size={24} weight="regular" />}
          required
          tooltip
          tooltipText="Your e-mail"
        />
        <Input
          type="password"
          textLabel="Password"
          name="password"
          id="password"
          icon={<Key size={24} weight="regular" />}
          required
          tooltip
          tooltipText={`
            Your password must be min 8 characters and max 40 characters,
            one uppercase letter and one number.
          `}
        />
        <Button />
      </Form>
    </TabsContent>
  );
}
