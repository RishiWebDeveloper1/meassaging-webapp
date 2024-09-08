import { useEffect, useState } from 'react'
import './App.css'
import Emoji from './component/Emoji';

function App() {
	let num = 50
	const [emojiCheck, setEmojiCheck] = useState(false);
	const [message, setMessage] = useState('');
	const [allChats, setAllChats] = useState([]);

	const onEmojiClick = (event) => {
		// Append the selected emoji to the message
		setMessage(prevMessage => prevMessage + event.emoji);
	};

	function sendMessage() {
		console.log("dsfgvdsg")
		const newMessage = <>
			<div className="self-chat-label-container">
				<div className="self-chat-label-box">
					{message}
					<div className="time-box">
						11:32 pm ✔️✔️
					</div>
				</div>
			</div>
			<div className="other-chat-label-container">
				<div className="other-chat-label-box">
					me tho thik hu
					Tu kesa hai bhai bahut dino se nahi mila haime tho thik hu
					Tu kesa hai bhai bahut dino se nahi mila haime tho thik hu
					Tu kesa hai bhai bahut dino se nahi mila haime tho thik hu
					Tu kesa hai bhai bahut dino se nahi mila hai
					<div className="time-box">
						11:32 pm ✔️✔️
					</div>
				</div>
			</div>
		</>

		setAllChats([...allChats, newMessage]);
	}

	return (
		<>
			<div className="main-container">
				<div className="mega-container">
					<div className="setting-panel-box">
						<div className="your-icon-box">
							<img src="/test-icon-deletable------.jpeg" alt="" className="your-icon" />
						</div>
						<div className="nav-icon-box">
							<img src="/chat-icon.png" alt="" className="nav-icon" />
						</div>
						<div className="nav-icon-box">
							<img src="/videos-icon.png" alt="" className="nav-icon" />
						</div>
					</div>
					<div className="user-card-list-box">
						<div className="chat-header-box">
							<div className="chat-header-title-box">
								<div className="chat-header-title">
									Chats
								</div>
							</div>
							<div className="tool-box">
								<div className="tool-icon-box"><img src="/edit-icon.png" alt="" className="tool-icon" /></div>
								<div className="tool-icon-box"><img src="/filter-icon.png" alt="" className="tool-icon" /></div>
							</div>
						</div>

						{
							Array.from({ length: num }, (_, index) => (

								<div key={index} className="user-card-box">
									<div className="user-icon-box">
										<img src="/user-icon.png" alt="" className="user-icon" />
									</div>
									<div className="user-detail-box">
										<div className="user-name-box">
											<div className="user-name">
												Rishi (You)
											</div>
										</div>
										<div className="user-description-box">
											<div className="user-description">
												weakup to reality😎
											</div>
										</div>
									</div>
								</div>

							))
						}

					</div>
					<div className="chat-box-container">
						<div className="user-menu-box">
							<div className="current-user-icon-box">
								<img src="/user-icon.png" alt="" className="current-user-icon" />
							</div>
							<div className="current-user-detail-box">
								<div className="current-user-name-box">
									<div className="current-user-name">
										Rishi (You)
									</div>
								</div>
								{/* <div className="current-user-description-box">
									<div className="current-user-description">
										rishi is good boy 😎
									</div>
								</div> */}
							</div>
						</div>
						<div className="chat-message-box">
							{emojiCheck && <Emoji onEmojiClick={onEmojiClick} />}
							{
								allChats.map((chat, index) => (
									<div key={index}> {chat} </div>
								))
							}

						</div>
						<div className="chat-input-field">
							<div className="nav-icon-box">
								<img src="/smile-emoji-icon.png" onClick={() => setEmojiCheck(prev => !prev)} alt="Emoji" className="nav-icon"
								/>
							</div>
							<div className="nav-icon-box">
								<img src="/paper-clip-icon.png" alt="Attach" className="nav-icon" />
							</div>
							<div className="message-input-box">
								<textarea className="message-input" name="message-input" id="messageInput" value={message} onChange={(e) => setMessage(e.target.value)} autoFocus
								/>
							</div>
							<div className="nav-icon-box">
								<img src="/send-icon.png" alt="Send" onClick={sendMessage} className="nav-icon"
								/>
							</div>
						</div>
					</div>
				</div>
			</div >
		</>
	)
}

export default App