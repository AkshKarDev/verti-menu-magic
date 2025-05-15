
import React from "react";
import { useForm } from "react-hook-form";
import Layout from "@/components/Layout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const MessagesPage = () => {
  const { toast } = useToast();
  const composeForm = useForm({
    defaultValues: {
      recipient: "",
      subject: "",
      message: ""
    }
  });

  const onSendMessage = (data: any) => {
    toast({
      title: "Message Sent",
      description: "Your message has been sent successfully."
    });
    console.log(data);
  };

  const generateMessages = (count: number, folder: string) => {
    return Array(count).fill(0).map((_, i) => ({
      id: `msg-${folder}-${i + 1}`,
      from: folder === 'sent' ? 'You' : `User${i + 1}@example.com`,
      to: folder === 'sent' ? `User${i + 1}@example.com` : 'You',
      subject: `Sample ${folder} message ${i + 1}`,
      preview: `This is a preview of the ${folder} message content...`,
      date: new Date(Date.now() - i * 86400000).toLocaleDateString(),
    }));
  };

  const inboxMessages = generateMessages(5, 'inbox');
  const sentMessages = generateMessages(3, 'sent');
  const draftMessages = generateMessages(2, 'drafts');
  
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Messages</h1>
        
        <Tabs defaultValue="inbox">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="inbox">Inbox</TabsTrigger>
            <TabsTrigger value="sent">Sent</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
            <TabsTrigger value="compose">Compose</TabsTrigger>
          </TabsList>
          
          <TabsContent value="inbox">
            <Card>
              <CardHeader>
                <CardTitle>Inbox</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {inboxMessages.map((message) => (
                    <div key={message.id} className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                      <div className="flex justify-between">
                        <span className="font-medium">{message.from}</span>
                        <span className="text-sm text-muted-foreground">{message.date}</span>
                      </div>
                      <div className="font-medium">{message.subject}</div>
                      <div className="text-sm text-muted-foreground truncate">{message.preview}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sent">
            <Card>
              <CardHeader>
                <CardTitle>Sent Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {sentMessages.map((message) => (
                    <div key={message.id} className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                      <div className="flex justify-between">
                        <span className="font-medium">To: {message.to}</span>
                        <span className="text-sm text-muted-foreground">{message.date}</span>
                      </div>
                      <div className="font-medium">{message.subject}</div>
                      <div className="text-sm text-muted-foreground truncate">{message.preview}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="drafts">
            <Card>
              <CardHeader>
                <CardTitle>Draft Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {draftMessages.map((message) => (
                    <div key={message.id} className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                      <div className="flex justify-between">
                        <span className="font-medium">To: {message.to}</span>
                        <span className="text-sm text-muted-foreground">{message.date}</span>
                      </div>
                      <div className="font-medium">{message.subject}</div>
                      <div className="text-sm text-muted-foreground truncate">{message.preview}</div>
                      <div className="flex justify-end mt-2">
                        <Button variant="outline" size="sm">Edit Draft</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="compose">
            <Card>
              <CardHeader>
                <CardTitle>Compose Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...composeForm}>
                  <form onSubmit={composeForm.handleSubmit(onSendMessage)} className="space-y-6">
                    <FormField
                      control={composeForm.control}
                      name="recipient"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Recipient</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={composeForm.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter message subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={composeForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Type your message here..." className="min-h-[200px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-end space-x-2">
                      <Button type="button" variant="outline">Save as Draft</Button>
                      <Button type="submit">Send Message</Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default MessagesPage;
