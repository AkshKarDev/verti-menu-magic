
import React from "react";
import { useForm } from "react-hook-form";
import Layout from "@/components/Layout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ReportsPage = () => {
  const { toast } = useToast();
  const createReportForm = useForm({
    defaultValues: {
      title: "",
      type: "",
      description: "",
      dateRange: ""
    }
  });

  const onCreateReport = (data: any) => {
    toast({
      title: "Report Created",
      description: "Your report has been successfully created."
    });
    console.log(data);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Reports</h1>
        
        <Tabs defaultValue="create">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="create">Create Report</TabsTrigger>
            <TabsTrigger value="view">View Reports</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle>Create New Report</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...createReportForm}>
                  <form onSubmit={createReportForm.handleSubmit(onCreateReport)} className="space-y-6">
                    <FormField
                      control={createReportForm.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Report Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter report title" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={createReportForm.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Report Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select report type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="financial">Financial</SelectItem>
                              <SelectItem value="performance">Performance</SelectItem>
                              <SelectItem value="analytics">Analytics</SelectItem>
                              <SelectItem value="summary">Summary</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={createReportForm.control}
                      name="dateRange"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date Range</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select date range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="today">Today</SelectItem>
                              <SelectItem value="thisWeek">This Week</SelectItem>
                              <SelectItem value="thisMonth">This Month</SelectItem>
                              <SelectItem value="lastMonth">Last Month</SelectItem>
                              <SelectItem value="lastQuarter">Last Quarter</SelectItem>
                              <SelectItem value="thisYear">This Year</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={createReportForm.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Enter report description" {...field} />
                          </FormControl>
                          <FormDescription>
                            Briefly describe the purpose and content of this report.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit">Create Report</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="view">
            <Card>
              <CardHeader>
                <CardTitle>View Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((report) => (
                    <div key={report} className="p-4 border rounded-md">
                      <h3 className="font-semibold">Quarterly Performance Report {report}</h3>
                      <p className="text-muted-foreground">Created on: May {report + 10}, 2025</p>
                      <div className="flex justify-end mt-2">
                        <Button variant="outline" size="sm" className="mr-2">View</Button>
                        <Button variant="outline" size="sm">Download</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Reports Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-md text-center">
                      <h3 className="text-xl font-bold">12</h3>
                      <p className="text-muted-foreground">Reports Generated</p>
                    </div>
                    <div className="p-4 border rounded-md text-center">
                      <h3 className="text-xl font-bold">5</h3>
                      <p className="text-muted-foreground">Shared Reports</p>
                    </div>
                    <div className="p-4 border rounded-md text-center">
                      <h3 className="text-xl font-bold">28</h3>
                      <p className="text-muted-foreground">Report Views</p>
                    </div>
                  </div>
                  
                  <div className="h-64 border rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Report Usage Analytics Graph</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ReportsPage;
