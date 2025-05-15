
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
          <p className="text-gray-600">
            Welcome to your dashboard! Use the sidebar menu to navigate through the application.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white shadow rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">Card Title {item}</h3>
              <p className="text-gray-500">
                This is a sample card that you might use to display some information.
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
