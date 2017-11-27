
import SignInPanel from 'components/user/SignInPanel';
import EntryPanel from 'components/user/Panel';

let propTypes={
    signInAjax:PT.func,
    clearLoginMsg:PT.func


}
export default class SignIn extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
           this.props.clearLoginMsg();
    }
    componentWillUnmount() {
        this.props.clearLoginMsg();
    }
    render(){
        let {signInAjax,signInMsg}=this.props;
        console.log(signInMsg,"xixixixi");

        return (
            <EntryPanel >
                <SignInPanel 
                    {...{
                        signInAjax,
                        signInMsg
                    }}
                />
            </EntryPanel>
        );
    }
}
SignIn.propTypes=propTypes;