import {Link,withRouter} from 'react-router-dom';
import S from './style.scss';

let propType={
    userInfo:PT.object,
    initMyPage:PT.func
}
function AuthorInfo({userInfo,initMyPage}){

    let {avatar, user_name,user_id} = userInfo;

    return (
        <div className={S.author_info}>
            <Link
                to="/my_page"   
                className={S.avatar}
                onClick={
                    ev=>{
                        ev.stopPropagation();
                        ev.preventDefault();
                        initMyPage("user_id",{user_id},"所有文章");
                    }
                }
            >
                <img src={avatar} alt=""/>
            </Link>

            <div className={S.title}>
                    {user_name}
           
            </div>

        </div>
    );
}
AuthorInfo.propType=propType;
export default withRouter(AuthorInfo);