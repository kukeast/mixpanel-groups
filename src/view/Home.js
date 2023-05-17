import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../conponent/Button';
import Card from '../conponent/Card';
import Container from '../conponent/Container';
import Typography from '../conponent/Typography';
import { EditorGlobalStyles } from '../constants/global';
import FolderImg from '../img/Folder';
import { getAllGroups } from '../util/api';
import CreateModal from './CreateModal';

const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
`
const CardList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`
function Home() {
    const [allGroups, setAllGroups] = useState([])
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        getAllGroups().then(res => setAllGroups(res))
    }, [showModal])
    const handleClickCreateGroup = () => {
        setShowModal(prev => !prev)
    }
    const handleClickCard = () => {
    }
    return (
        <Container>
            <EditorGlobalStyles/>
            <HeaderBox>
                <Typography size={28} weight={700} color={'gray9'}>모든 그룹</Typography>
                <Button onClick={handleClickCreateGroup}>그룹 만들기</Button>
            </HeaderBox>
            <CardList>
                {allGroups.filter(g => !g.is_deleted).map(group => (
                    <Link to={group.id} key={group.id} style={{ textDecoration: "none" }}>
                        <Card onClick={handleClickCard}>
                            <FolderImg/>
                            <Typography size={16} weight={500} color={'gray9'} margin={'24px 0px 4px'}>{group.title}</Typography>
                            <Typography size={14} color={'gray6'}>{group.boards.length}개의 보드</Typography>
                        </Card>
                    </Link>
                ))}
            </CardList>
            {showModal && 
                <CreateModal onClickClose={handleClickCreateGroup}/>
            }
        </Container>
    )
}

export default Home;
