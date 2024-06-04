import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Outlet } from 'react-router-dom'

export function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
        {children}
      </Main>
    </>
  );
}
