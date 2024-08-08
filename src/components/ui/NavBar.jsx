import { Flex, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import logo from "../../assets/logo/logo-no-background.png"
import { GithubFilled } from "@ant-design/icons";
import { theme } from 'antd';


const NavBar = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken()
      
    let headerStyle = {
        boxShadow : "0px 3px #f5f5f5",
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        backgroundColor : '#ffffff',
    }

    let items = [
        {
            key : "github",
            label: (
                <a href="https://github.com/MikiyasMebrate" target="_blank">
                  <GithubFilled style={{fontSize: '30px'}} />,
                </a>
              ),
        }
    ]


    return (
        <>
        <Header style={headerStyle}>
            <Flex justify="space-between" align="center" >
                <img style={{maxWidth : "200px"}} src={logo} alt="logo" />
                <Menu style={{border:0, width : 70}} mode="horizontal" items={items}></Menu>
            </Flex>
        </Header>
        </>
    );
}
 
export default NavBar;