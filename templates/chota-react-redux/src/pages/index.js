
import SiteHeaderContainer from "../containers/SiteHeaderContainer";
import TodoListContainer from "../containers/TodoListContainer";
import Layout from "../ui/templates/Layout/Layout.component";
export default function HomePage() {
  return (
    <Layout>
      <SiteHeaderContainer />
      <TodoListContainer />
    </Layout>
  );
}
