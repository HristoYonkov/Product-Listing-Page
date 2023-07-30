import React from 'react'
import './Laptops.scss'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'
import Dropdown from '../../components/Dropdown/Dropdown'
import FilterMobile from '../../components/FilterMobile/FilterMobile'

const Laptops = () => {

    return (
        <div className='wrapper'>
            <Filter />

            <div className='app__container'>
                <section className='app__container-top'>

                    <div className='app__container-descr'>
                        <div className='app__container__descr-heading'>
                            <h1>Laptops</h1>
                            <p>'Smart-shopping' offers one of the best pricing for laptops!</p>
                        </div>

                        <div className='app__container__descr-count'>
                            <p><span>4</span> products in store</p>
                        </div>
                    </div>

                    <div className='app__container-sort'>
                        <FilterMobile />
                        <Dropdown />
                    </div>
                </section>

                <section className='app__container-products'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </section>
            </div>
        </div>
    )
}

export default Laptops