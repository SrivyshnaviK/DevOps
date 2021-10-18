import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withKnobs, text } from "@storybook/addon-knobs";
import { FTCard } from "../atoms/FTCard";

export default {
    title: "HorizontalTab",
    decorators: [withKnobs],
};

const useStyles = makeStyles({
    red: {
        backgroundColor: 'white',
        boxShadow: "0px 0px 1px #9E9E9E"
    },

    color: {
        color: 'black',
        paddingTop: '20px',
    },
    text: {
        fontWeight: '16px',
        textTransform: 'none',
        fontWeight: 500,
        textAlign: 'center',
        '&:focus': {
            outline: 'none',
            border: 'none',
        },
    },

});
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export const HorizontalTab = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const name = text("cardStyle", classes.root1);
    return <div>
        <AppBar position='static' className={classes.red}>
                <Tabs indicatorColor="primary"
                    textColor="primary" value={value} onChange={handleChange} className={classes.color} >
                    <Tab classes={{ root: classes.text }} label="Basic Profile" {...a11yProps(0)} />
                    <Tab className={classes.text} label="General" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    Tab1
            </TabPanel>
            <TabPanel value={value} index={1}>
                Tab2
            </TabPanel>
            </AppBar>
    </div>;
};
