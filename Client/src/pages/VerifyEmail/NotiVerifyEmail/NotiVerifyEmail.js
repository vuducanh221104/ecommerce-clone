import styles from './NotiVerifyEmail.module.scss';
import classNames from 'classnames/bind';
import { BsCheck2Circle, BsEnvelopeCheck } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ErrorWarning from '~/components/ErrorWarning';
import { resendEmaill } from '~/services/userServices';
const cx = classNames.bind(styles);

function NotiVerifyEmail() {
    const Navigate = useNavigate();

    return (
        <>
            <div className={cx('wrapper pt-0 pt-lg-0 container')}>
                <div className={cx('content')}>
                    <div className={cx('verify')}>
                        <BsCheck2Circle className={cx('icon-email')} />
                        <h2 className={cx('verify-title')}>Verify Successful</h2>
                        <p className={cx('need-help')}>
                            <span onClick={() => Navigate('/login')}>Login</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotiVerifyEmail;
