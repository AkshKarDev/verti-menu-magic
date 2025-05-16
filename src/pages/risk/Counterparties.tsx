
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Shield, AlertTriangle, Search, Info } from "lucide-react";

const counterparties = [
  { id: 1, name: "Global Bank Ltd", rating: "A+", creditLimit: "$10M", currentExposure: "$8.2M", availableLimit: "$1.8M", risk: "Medium" },
  { id: 2, name: "Eastern Financial", rating: "AA-", creditLimit: "$15M", currentExposure: "$5.6M", availableLimit: "$9.4M", risk: "Low" },
  { id: 3, name: "Northern Trust", rating: "BBB+", creditLimit: "$8M", currentExposure: "$7.9M", availableLimit: "$0.1M", risk: "High" },
  { id: 4, name: "Western Securities", rating: "A", creditLimit: "$12M", currentExposure: "$4.3M", availableLimit: "$7.7M", risk: "Low" },
  { id: 5, name: "Southern Bank", rating: "BB+", creditLimit: "$5M", currentExposure: "$3.8M", availableLimit: "$1.2M", risk: "Medium" }
];

const exposureChartData = [
  { id: 1, counterparty: "Global Bank Ltd", tradingExposure: "$5.1M", settlementExposure: "$3.1M", total: "$8.2M" },
  { id: 2, counterparty: "Eastern Financial", tradingExposure: "$3.2M", settlementExposure: "$2.4M", total: "$5.6M" },
  { id: 3, counterparty: "Northern Trust", tradingExposure: "$4.5M", settlementExposure: "$3.4M", total: "$7.9M" },
  { id: 4, counterparty: "Western Securities", tradingExposure: "$2.8M", settlementExposure: "$1.5M", total: "$4.3M" },
  { id: 5, counterparty: "Southern Bank", tradingExposure: "$2.2M", settlementExposure: "$1.6M", total: "$3.8M" }
];

const CounterpartiesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  const filteredCounterparties = counterparties.filter(cp => 
    cp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredExposures = exposureChartData.filter(exp => 
    exp.counterparty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRiskIcon = (risk: string) => {
    switch(risk.toLowerCase()) {
      case "high":
        return <AlertTriangle size={16} className="text-red-500" />;
      case "medium":
        return <Shield size={16} className="text-amber-500" />;
      case "low":
        return <Info size={16} className="text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Counterparty Risk Management</h1>
        
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search counterparties..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="exposure">Exposure Details</TabsTrigger>
            <TabsTrigger value="limits">Limit Management</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Counterparty Overview</CardTitle>
                <CardDescription>
                  Summary of all counterparties and their risk profiles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Counterparty</TableHead>
                      <TableHead>Credit Rating</TableHead>
                      <TableHead>Risk Level</TableHead>
                      <TableHead>Credit Limit</TableHead>
                      <TableHead>Current Exposure</TableHead>
                      <TableHead>Available Limit</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCounterparties.map((cp) => (
                      <TableRow key={cp.id} className="cursor-pointer hover:bg-muted">
                        <TableCell className="font-medium">{cp.name}</TableCell>
                        <TableCell>{cp.rating}</TableCell>
                        <TableCell className="flex items-center">
                          {getRiskIcon(cp.risk)} <span className="ml-1">{cp.risk}</span>
                        </TableCell>
                        <TableCell>{cp.creditLimit}</TableCell>
                        <TableCell>{cp.currentExposure}</TableCell>
                        <TableCell>{cp.availableLimit}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="exposure">
            <Card>
              <CardHeader>
                <CardTitle>Exposure Breakdown</CardTitle>
                <CardDescription>
                  Detailed exposure analysis by counterparty and exposure type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Counterparty</TableHead>
                      <TableHead>Trading Exposure</TableHead>
                      <TableHead>Settlement Exposure</TableHead>
                      <TableHead>Total Exposure</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredExposures.map((exp) => (
                      <TableRow key={exp.id} className="cursor-pointer hover:bg-muted">
                        <TableCell className="font-medium">{exp.counterparty}</TableCell>
                        <TableCell>{exp.tradingExposure}</TableCell>
                        <TableCell>{exp.settlementExposure}</TableCell>
                        <TableCell className="font-medium">{exp.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="limits">
            <Card>
              <CardHeader>
                <CardTitle>Limit Management</CardTitle>
                <CardDescription>
                  Configure and adjust counterparty risk limits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  This section allows risk managers to adjust and configure various limit types for each counterparty.
                </p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Counterparty</TableHead>
                      <TableHead>Credit Limit</TableHead>
                      <TableHead>Settlement Limit</TableHead>
                      <TableHead>Daily Trading Limit</TableHead>
                      <TableHead>Last Review</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCounterparties.map((cp) => (
                      <TableRow key={cp.id} className="cursor-pointer hover:bg-muted">
                        <TableCell className="font-medium">{cp.name}</TableCell>
                        <TableCell>{cp.creditLimit}</TableCell>
                        <TableCell>{cp.creditLimit.replace('$', '$') * 0.6}</TableCell>
                        <TableCell>{cp.creditLimit.replace('$', '$') * 0.4}</TableCell>
                        <TableCell>2023-05-01</TableCell>
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

export default CounterpartiesPage;
