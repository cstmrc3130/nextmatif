const Footer = async () =>
{
    await new Promise(resolve => setTimeout(resolve, 1000))

    return (
        <div>Here is footer</div>
    );
};

export default Footer;
