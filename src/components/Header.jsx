import PropTypes from 'prop-types';

function Header({ text, bgColor,txtColor }) {

    const headerStyles = {
    backgroundColor: bgColor,
    color:txtColor
    }
    
    return (
        <header style={headerStyles}>
            <div className="container">
                <h1>{ text}</h1>
            </div>
        </header>
    );
}

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: 'rgba(0,0,0,0.4)',
    txtColor:'#ff6e95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    txtColor:PropTypes.string
}
export default Header;