import Logo from '../assets/investment-calculator-logo.png'

export default function Header(){
    return (
        <header id='header'>
            <img src={Logo} alt='money bag logo'/>
            <h1> Investement Calculator </h1>
        </header>
    )
}