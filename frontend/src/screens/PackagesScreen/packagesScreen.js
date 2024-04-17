import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allPackages } from '../../actions/packagesActions'
import { Row } from 'react-bootstrap'
import './packagesScreen.css'

const PackageScreen = () => {
    const dispatch = useDispatch()
    const packagesAll = useSelector((state) => state.packagesAll)
    const { packages } = packagesAll

    useEffect(() => {
        dispatch(allPackages())
    }, [dispatch])

    return (
        <>
            <h1 className='heading'>Unleash your beauty magic with our enchanting makeup packages</h1>
            <Row className='ro' >
                {packages.map((packagee) =>
                    <Row key={packagee._id} sm={12} md={6} lg={4} xl={3} className='package_list'>
                        <div>
                            <h2>{packagee.name}</h2>
                            <p>{packagee.description}</p>
                            {/* Previously 'Rest' component usage might be placed here */}
                        </div>
                    </Row>
                )}
            </Row>
        </>
    )
}

export default PackageScreen;
