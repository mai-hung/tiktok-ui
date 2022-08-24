import Header from '~/components/Layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header></Header>
            {children}
        </div>
    );
}

export default HeaderOnly;
