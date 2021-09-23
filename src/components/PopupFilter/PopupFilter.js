import React, { useState } from 'react';
import { PopupContainer, PopupContent, OptionItem, ButtonSearch, InputSearch } from './PopupFilterStyle';
import { useSelector, useDispatch } from 'react-redux';
import { 
    selectData,
    searchData,
    removeData,
} from '../../redux/dataFilteredSlice';
import {
    albumApi
} from '../../services/albumApi'
import { Flex } from '../Layout/Layout';

function PopupFilter({ setHasPopup }) {
    const [searchActive, setSearchActive] = useState('album')
    const [searchInput, setSearchInput] = useState('')
    const [error, setError] = useState(false)

    const dataSelector = useSelector(selectData)
    const dispatch = useDispatch()

    const { data: dataAlbums } = albumApi.endpoints.getAlbums.useQueryState()
    const { data: dataUsers } = albumApi.endpoints.getUsers.useQueryState()

    // console.log(searchActive)

    const handleSubmit = async () => {
        if (searchInput === '') {
            setError(true)
        } else {
            // TODO
            if (searchActive === 'album') {
                const processData = dataAlbums
                const filteredData = processData.filter(el => el.title.toLowerCase().includes(searchInput.toLowerCase()))
                dispatch(searchData({
                    searchType: searchActive,
                    searchInput,
                    filteredData,
                }))
            } else {
                const processData = dataUsers
                const processDataAlbum = dataAlbums
                const filteredUsers = processData.filter(el => el.name.toLowerCase().includes(searchInput.toLowerCase()))
                const filteredData = processDataAlbum.filter(({ userId }) => filteredUsers.some(({ id }) => id === userId))

                dispatch(searchData({
                    searchType: searchActive,
                    searchInput,
                    filteredData,
                }))
            }
            
            setHasPopup(false)
            setSearchInput('')
        }
    }

    const handleResetFilter = () => {
        dispatch(removeData())
        setHasPopup(false)
    }

    return (
        <PopupContainer>
            <div className='overlay' onClick={() => setHasPopup(false)} />

            <PopupContent>
                <div className='border' />

                <Flex direction='row' spaceBetween>
                    <span className='copy'>Filter Albums by:</span>
                    <span className='copyRed' onClick={handleResetFilter}>Reset Filter</span>
                </Flex>
                <div className='options'>
                    <OptionItem 
                        active={searchActive === 'album'}
                        onClick={() => setSearchActive('album')}
                    >Album Name</OptionItem>
                    <OptionItem 
                        active={searchActive === 'name'}
                        onClick={() => setSearchActive('name')}
                    >User Name</OptionItem>
                </div>
                <InputSearch 
                    type='text'
                    name='search'
                    placeholder='Search album...'
                    value={searchInput}
                    autoComplete="off"
                    onChange={(e) => setSearchInput(e.target.value)}
                    error={error}
                />
                <ButtonSearch
                    onClick={handleSubmit}
                >
                    Search
                </ButtonSearch>
            </PopupContent>
        </PopupContainer>
    );
}

export default PopupFilter;