import classNames from 'classnames/bind';
import styles from './Chat.module.scss';

import React, { useState, useEffect, useRef } from 'react';
import { Col, Row, Modal, Empty, Tooltip } from 'antd';
import { SearchOutlined, SendOutlined, DeleteOutlined } from '@ant-design/icons';
import images from '~/assets/images';
import socketIOClient from 'socket.io-client';
import { deleteAllRoom, chatHistory, deleteRoom, activeRoom } from '../../services/chatServices';

const host = process.env.REACT_APP_BASE_URL;

const cx = classNames.bind(styles);
function Chat({ role = 'admin' }) {
    console.log(host);
    // const [searchInput, setSearchInput] = useState('');
    // const [roomName, setRoomName] = useState('');
    // const [avatar, setAvatar] = useState('');
    // const [fullname, setFullname] = useState('');
    // const [messages, setMessages] = useState([]);
    // const [message, setMessage] = useState('');
    // const [activeRooms, setActiveRooms] = useState([]);
    // const [modalType, setModalType] = useState(null);
    // const [showModal, setShowModal] = useState(false);

    // const socketRef = useRef();
    // const messageContainerRef = useRef(null);

    // console.log(roomName);
    // useEffect(() => {
    //     socketRef.current = socketIOClient.connect(host);

    //     // Join on room when component mouted
    //     socketRef.current.emit('joinRoom', roomName);

    //     // Listen  message to server
    //     socketRef.current.on('message', (message) => {
    //         const messageData = message.content;
    //         const messageRole = message.role;
    //         const data = {
    //             content: messageData,
    //             role: messageRole,
    //         };
    //         setMessages((prevMessages) => [...prevMessages, data]);
    //     });

    //     // Fetch the list of active rooms when the component mounts
    //     activeRoom()
    //         .then((response) => {
    //             const dataRoom = response;
    //             setActiveRooms(dataRoom);
    //             // Default join room first if there are active rooms
    //             if (dataRoom.length > 0) {
    //                 handleDefaultRoom(dataRoom);
    //             } else {
    //                 // Handle the case when there are no active rooms
    //                 setMessages([]);
    //                 console.error('No active rooms found.');
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching active rooms:', error);
    //         });

    //     return () => {
    //         // Rời khỏi phòng khi component bị unmount
    //         socketRef.current.emit('leaveRoom', roomName);
    //     };
    // }, []);

    // // Set Scroll always down
    // useEffect(() => {
    //     if (messageContainerRef.current) {
    //         messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    //     }
    // }, [messages]);

    // //  Handle
    // const sendMessage = () => {
    //     if (message.trim() !== '') {
    //         // Send  message to server
    //         socketRef.current.emit('message', { roomName, message, role });
    //         setMessage('');
    //     }
    // };
    // const handleJoinRoom = (clickRoomName) => {
    //     socketRef.current.emit('joinRoom', { roomName: clickRoomName });

    //     // Fetch chat history
    //     chatHistory(clickRoomName)
    //         .then((response) => {
    //             setMessages(response.chatHistory);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching chat history:', error);
    //         });
    // };
    // const handleDefaultRoom = (data) => {
    //     if (data && data.length > 0) {
    //         setRoomName(data[0].roomName);
    //         setAvatar(data[0].avatar);
    //         setFullname(data[0].fullname);
    //         // Handle
    //         handleJoinRoom(data[0].roomName);
    //     } else {
    //         // Xử lý khi không có phòng nào hoạt động
    //         console.error('No active rooms found.');
    //     }
    // };

    // const handleOtherRoom = (data) => {
    //     setRoomName(data.roomName);
    //     setAvatar(data.avatar);
    //     setFullname(data.fullname);
    //     // Handle
    //     handleJoinRoom(data.roomName);
    // };

    // const handleDeleteAll = () => {
    //     deleteAllRoom()
    //         .then(() => {
    //             setActiveRooms([]);
    //             setAvatar(null);
    //             setFullname('');
    //             setRoomName('');
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    // const handleDeleteRoom = () => {
    //     deleteRoom(roomName, avatar, fullname)
    //         .then(() => {
    //             setAvatar(null);
    //             setFullname('');
    //             setRoomName('');
    //             setMessages([]);
    //             setActiveRooms((prev) => prev?.filter((item) => item.roomName !== roomName));
    //         })
    //         .catch((error) => {
    //             console.error('Error deleting room:', error);
    //         });
    // };
    // const handleDelete = (type) => {
    //     setModalType(type);
    //     setShowModal(true);
    // };
    // const handleOk = () => {
    //     setShowModal(false);

    //     if (modalType === 'deleteRoom') {
    //         handleDeleteRoom();
    //     } else if (modalType === 'deleteAllRooms') {
    //         handleDeleteAll();
    //     }
    // };

    // // Handle to parse messages and replace links with anchor tags
    // const parseMessages = (msg) => {
    //     const parts = msg.split(/\b(https?:\/\/[^\s]+)\b/);
    //     return parts.map((part, index) =>
    //         part.match(/^https?:\/\/[^\s]+$/) ? (
    //             <a key={index} href={part} target="_blank" rel="noopener noreferrer" className={cx('text-link')}>
    //                 {part}
    //             </a>
    //         ) : (
    //             part
    //         ),
    //     );
    // };

    // // Handle Search
    // const filterActiveRoom = activeRooms?.filter((item) => item.roomName !== '');
    // const filteredearchRoom = filterActiveRoom.filter((item) =>
    //     item.roomName.toLowerCase().includes(searchInput.toLowerCase()),
    // );

    return (
        <Row>
            <Col span={10}>test</Col>
            <Col span={14} className={cx('wrapper-right')}>
                test
            </Col>
        </Row>
    );
}

export default Chat;
