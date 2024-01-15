import React from 'react';
import "./Rightbar.css";
import { Users } from "../../dummyDate";
import Online from '../online/Online';

export default function Rightbar({ user }) {
	const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
	const HomeRightbar = () => {
		return (
			<>
			<div className="eventContainer">
				<img src={PUBLIC_FOLDER + "/star.png"} alt="" className='starImg'/>
				<span className="eventText">
					<b>ソーシャルスタイル理論！あなたは何タイプ！？</b>
				</span>
				<img src={PUBLIC_FOLDER + "/star.png"} alt="" className='starImg'/>
			</div>
			<img src={PUBLIC_FOLDER + "/event.jpeg"} alt="" className='eventImg'/>
			<h4 className="rightbarTitle">オンラインの友達</h4>
			<ul className="rightbarFriendList">
				{Users.map((user) => (
				<Online user={user} key={user.id} />
				))}
			</ul>
			<p className="promotionTitle">オススメコーチング</p>
			<img src={PUBLIC_FOLDER + "/promotion/promotion1.jpeg"} alt="" className='rightbarPromotionImg'/>
			<p className="promotionName">銀座コーチングスクール</p>
			<img src={PUBLIC_FOLDER + "/promotion/promotion2.jpeg"} alt="" className='rightbarPromotionImg'/>
			<p className="promotionName">myPecon</p>
			<img src={PUBLIC_FOLDER + "/promotion/promotion3.jpeg"} alt="" className='rightbarPromotionImg'/>
			<p className="promotionName">mento</p>
			</>
		);
	};

	const ProfileRightbar = () => {
		return (
		<>
			<h4 className="rightbarTitle">ユーザー情報</h4>
				<div className="rightbarInfo">
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">出身：</span>
						<span className="rightbarInfoKey">東京都板橋</span>
					</div>
					<h4 className="rightbarTitle">あなたの友達</h4>
						<div className="rightbarFollowings">
							<div className="rightbarFollowing">
								<img src={PUBLIC_FOLDER +"/person/1.jpeg"} alt="" className='rightFollowingImg'/>
									<span className="rightbarFollowingName">benjie</span>
							</div>
							<div className="rightbarFollowing">
								<img src={PUBLIC_FOLDER +"/person/2.jpeg"} alt="" className='rightFollowingImg'/>
									<span className="rightbarFollowingName">sae_coach</span>
							</div>
							<div className="rightbarFollowing">
								<img src={PUBLIC_FOLDER +"/person/3.jpeg"} alt="" className='rightFollowingImg'/>
									<span className="rightbarFollowingName">jojo</span>
							</div>
							<div className="rightbarFollowing">
								<img src={PUBLIC_FOLDER +"/person/4.jpeg"} alt="" className='rightFollowingImg'/>
									<span className="rightbarFollowingName">mochizuki</span>
							</div>
							<div className="rightbarFollowing">
								<img src={PUBLIC_FOLDER +"/person/5.jpeg"} alt="" className='rightFollowingImg'/>
									<span className="rightbarFollowingName">Rei</span>
							</div>
						</div>
				</div>
			</>
		);
	};

	return (
		<div className='rightbar'>
			<div className="rightbarWrapper">
				{user ? <ProfileRightbar /> : <HomeRightbar />}
			</div>
		</div>
	);
}
