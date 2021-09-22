import React, { useState } from 'react';
import { PopupContainer, PopupContent, OptionItem, ButtonSearch, InputSearch } from './PopupFilterStyle';

function PopupFilter({ setHasPopup }) {
    const [searchActive, setSearchActive] = useState('album')

    return (
        <PopupContainer>
            <div className='overlay' onClick={() => setHasPopup(false)} />

            <PopupContent>
                <div className='border' />

                <span className='copy'>Filter Albums by:</span>
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
                    autoComplete="off"
                    // error={true}
                />
                <ButtonSearch>
                    Search
                </ButtonSearch>
            </PopupContent>
        </PopupContainer>
    );
}

export default PopupFilter;