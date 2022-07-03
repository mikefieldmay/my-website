import * as React from 'react'
import { Link } from 'react-router-dom';

import * as styles from './LinkButton.css'

interface Props {
    title: string
    to: string
}

export const LinkButton: React.SFC<Props> = ({
    title,
    to
}) => <Link className={styles.LinkButton} to={to}>{title}</Link>