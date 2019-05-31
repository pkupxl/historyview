import * as React from 'react';
import { connect } from 'react-redux';
import {InputLabel,FormControl} from 'material-ui';
import Select from 'material-ui/Select';
import Input from 'material-ui/Input';
import { withStyles, WithStyles} from 'material-ui';
import { RootState , HistoryResultState } from '../redux/reducer';
import { Dispatch } from 'redux';
import { Theme } from 'material-ui/styles';
import { ChangeEvent } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/github';
import Button from 'material-ui/Button/Button';
import RegularCard from './Cards/RegularCard';
import 'ace-diff/dist/ace-diff.min.css';
import {Link} from "react-router-dom";

const styles = (theme: Theme) => ({
    container: {
        margin: theme.spacing.unit * 2
    },
    form: {
        paddingTop: '15px',
        width: '95%',
        float: 'left',
    },
    search: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        width: `calc(100% - ${theme.spacing.unit * 4}px)`,
        flex: 1,
    },
    button: {
        margin: theme.spacing.unit,
        float: 'right',
    },

    acediff: {
        height: '80%',
        bottom: '0px',
        width: '100%',
        background: '#000000',
    }

});

interface CodeInputFormProps {
    query?: string;
    historyCallback: Function;
    dispatch: Dispatch<RootState>;
    historyResult: HistoryResultState;
    project:string;
}

const mapStateToProps = (state: RootState) => ({
    historyResult: state.historyResult
});

type CodeInputFormStyles = WithStyles<'container' | 'form' | 'search' | 'button' | 'acediff'>;

class CodeInputForm extends React.Component<CodeInputFormProps & CodeInputFormStyles> {
    state = {
        input: "",
    };

    type: HTMLInputElement;

    componentDidMount() {
        this.setState({input: this.props.query || ''});
    }

    componentWillReceiveProps(nextProps: CodeInputFormProps & CodeInputFormStyles) {
        this.setState({input: nextProps.query || ''});
    }

    handleChange = (s: string, event: ChangeEvent<HTMLInputElement>) => {
        this.setState({input: s});
    }

    handleSubmit= (event: {}) => {
        const {dispatch, historyCallback} = this.props;
        dispatch(historyCallback({query: this.state.input,type:this.type.value}));

    }

    render() {
        const {classes,project} = this.props;
        return (
            <div className={classes.form}>
                <RegularCard headerColor="blue" cardTitle="请输入代码:">
                    <FormControl>
                        <InputLabel htmlFor="inputType">输入类型</InputLabel>
                        <Select
                            native={true}
                            input={<Input id="inputType" inputRef={(input) => {this.type = input}}/>}
                        >
                            <option key="OneLine" value="OneLine">One-Line</option>
                            <option key="MultiLines" value="MultiLines">Multi-Line</option>
                            <option key="Method" value="Method">Method</option>
                            <option key="Class" value="Class">Class</option>

                        </Select>
                    </FormControl>


                <AceEditor
                    mode="java"
                    theme="github"
                    value={this.state.input}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}}
                    onChange={this.handleChange}
                    width={'100%'}
                    height={'100px'}
                />

                    <Button color="primary" className={classes.button} onClick={this.handleSubmit}>
                        <Link to={{pathname: `/demo/${project}/codetrace/timeline`}}>提交
                        </Link>
                    </Button>

                </RegularCard>
            </div>
        );
    }
}

export default withStyles(styles)<{
   historyCallback: Function, query?: string ,project:string,
}>(connect(mapStateToProps)(CodeInputForm));