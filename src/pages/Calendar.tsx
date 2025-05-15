
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "@/components/Layout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const CalendarPage = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [showEventForm, setShowEventForm] = useState(false);
  
  const eventForm = useForm({
    defaultValues: {
      title: "",
      startTime: "",
      endTime: "",
      description: "",
      priority: "medium"
    }
  });

  const onCreateEvent = (data: any) => {
    toast({
      title: "Event Created",
      description: "Your event has been successfully created."
    });
    console.log({ ...data, date });
    setShowEventForm(false);
    eventForm.reset();
  };

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Calendar</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
              <div className="mt-6 flex justify-center">
                <Button onClick={() => setShowEventForm(true)}>Add Event</Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="lg:col-span-2">
            {showEventForm ? (
              <Card>
                <CardHeader>
                  <CardTitle>Add Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...eventForm}>
                    <form onSubmit={eventForm.handleSubmit(onCreateEvent)} className="space-y-6">
                      <FormField
                        control={eventForm.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Event Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter event title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={eventForm.control}
                          name="startTime"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Start Time</FormLabel>
                              <FormControl>
                                <Input type="time" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={eventForm.control}
                          name="endTime"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>End Time</FormLabel>
                              <FormControl>
                                <Input type="time" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={eventForm.control}
                        name="priority"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Priority</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select priority level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="high">High</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={eventForm.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Enter event description" {...field} />
                            </FormControl>
                            <FormDescription>
                              Provide additional details about this event.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex justify-end gap-2">
                        <Button type="button" variant="outline" onClick={() => setShowEventForm(false)}>Cancel</Button>
                        <Button type="submit">Create Event</Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Today's Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 border-l-4 border-blue-500 bg-blue-50 rounded">
                      <h3 className="font-medium">Team Meeting</h3>
                      <p className="text-sm text-muted-foreground">10:00 AM - 11:00 AM</p>
                    </div>
                    <div className="p-3 border-l-4 border-green-500 bg-green-50 rounded">
                      <h3 className="font-medium">Project Review</h3>
                      <p className="text-sm text-muted-foreground">1:30 PM - 2:30 PM</p>
                    </div>
                    <div className="p-3 border-l-4 border-purple-500 bg-purple-50 rounded">
                      <h3 className="font-medium">Client Call</h3>
                      <p className="text-sm text-muted-foreground">3:00 PM - 4:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage;
