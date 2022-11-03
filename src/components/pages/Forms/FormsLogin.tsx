import { TabsContent } from "@radix-ui/react-tabs";
import { Form } from "./styles";

export function FormsLogin() {
  return (
    <TabsContent value="login">
      <Form></Form>
    </TabsContent>
  );
}
