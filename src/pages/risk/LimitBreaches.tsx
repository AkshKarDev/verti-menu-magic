
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, InfoIcon, ShieldAlert } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const LimitBreachesPage = () => {
  const [activeTab, setActiveTab] = useState("current");

  const currentBreaches = [
    { id: 1, counterparty: "Global Bank Ltd", breachType: "Credit Limit", limit: "$10M", exposure: "$12.5M", breachAmount: "$2.5M", since: "2023-05-12", severity: "High" },
    { id: 2, counterparty: "Eastern Financial", breachType: "Settlement Limit", limit: "$5M", exposure: "$6.3M", breachAmount: "$1.3M", since: "2023-05-14", severity: "Medium" },
    { id: 3, counterparty: "Northern Trust", breachType: "Daily Trading Limit", limit: "$8M", exposure: "$9.1M", breachAmount: "$1.1M", since: "2023-05-15", severity: "Low" }
  ];

  const historicalBreaches = [
    { id: 101, counterparty: "Global Bank Ltd", breachType: "Credit Limit", limit: "$10M", exposure: "$11.2M", breachAmount: "$1.2M", start: "2023-04-10", end: "2023-04-15", resolution: "Manual approval" },
    { id: 102, counterparty: "Eastern Financial", breachType: "Daily Trading Limit", limit: "$5M", exposure: "$7.2M", breachAmount: "$2.2M", start: "2023-04-18", end: "2023-04-22", resolution: "Limit increase" },
    { id: 103, counterparty: "Western Securities", breachType: "Settlement Limit", limit: "$6M", exposure: "$6.8M", breachAmount: "$0.8M", start: "2023-04-25", end: "2023-04-27", resolution: "Exposure reduction" }
  ];

  const severityIcon = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "high":
        return <AlertTriangle size={16} className="text-red-500" />;
      case "medium":
        return <ShieldAlert size={16} className="text-amber-500" />;
      case "low":
        return <InfoIcon size={16} className="text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Limit Breaches</h1>
        
        <Tabs defaultValue="current" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="current">Current Breaches</TabsTrigger>
            <TabsTrigger value="historical">Historical Breaches</TabsTrigger>
          </TabsList>
          
          <TabsContent value="current">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle size={20} className="mr-2 text-red-500" />
                  Active Limit Breaches
                </CardTitle>
                <CardDescription>
                  All active limit breaches requiring attention. Click on a breach for more details.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Severity</TableHead>
                      <TableHead>Counterparty</TableHead>
                      <TableHead>Breach Type</TableHead>
                      <TableHead>Limit</TableHead>
                      <TableHead>Exposure</TableHead>
                      <TableHead>Breach Amount</TableHead>
                      <TableHead>Since</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentBreaches.map((breach) => (
                      <TableRow key={breach.id} className="cursor-pointer hover:bg-muted">
                        <TableCell>{severityIcon(breach.severity)}</TableCell>
                        <TableCell>{breach.counterparty}</TableCell>
                        <TableCell>{breach.breachType}</TableCell>
                        <TableCell>{breach.limit}</TableCell>
                        <TableCell>{breach.exposure}</TableCell>
                        <TableCell className="text-red-500">{breach.breachAmount}</TableCell>
                        <TableCell>{breach.since}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="historical">
            <Card>
              <CardHeader>
                <CardTitle>Historical Breaches</CardTitle>
                <CardDescription>
                  Record of past limit breaches and their resolutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Counterparty</TableHead>
                      <TableHead>Breach Type</TableHead>
                      <TableHead>Limit</TableHead>
                      <TableHead>Max Exposure</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead>Resolution</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {historicalBreaches.map((breach) => (
                      <TableRow key={breach.id} className="cursor-pointer hover:bg-muted">
                        <TableCell>{breach.counterparty}</TableCell>
                        <TableCell>{breach.breachType}</TableCell>
                        <TableCell>{breach.limit}</TableCell>
                        <TableCell>{breach.exposure}</TableCell>
                        <TableCell>{breach.start}</TableCell>
                        <TableCell>{breach.end}</TableCell>
                        <TableCell>{breach.resolution}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default LimitBreachesPage;
