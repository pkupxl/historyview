import * as React from 'react';
import {withStyles, WithStyles } from 'material-ui';
import { Theme } from 'material-ui/styles';
import { RootState, HistoryResultState } from '../../../redux/reducer';
import CodeInputForm from '../../../components/CodeInputForm';
import { connect } from 'react-redux';
import { fetchHistoryWorker} from '../../../redux/action';
import {Route, RouteComponentProps, Switch} from 'react-router';
import { container} from '../../../variables/styles';
import RegularCard from "../../../components/Cards/RegularCard";
import Timeline from "./Timeline";

const styles = (theme: Theme) => ({
    container: {
        ...container,
    },
    form: {
        paddingTop: '15px',
        width: '95%',
        float: 'left',
    },
}) as React.CSSProperties;

const mapStateToProps = (state: RootState) => ({
    historyResult:state.historyResult
});

interface CodeTraceTabRouteProps {
    project: string;
}

interface CodeTraceTabProps extends RouteComponentProps<CodeTraceTabRouteProps> {
    historyResult: HistoryResultState;
}

type CodeTraceTabStyle = WithStyles<'container' | 'form'>;

class CodeTraceTab extends React.Component<CodeTraceTabProps & CodeTraceTabStyle, {}> {
    render() {
        const { historyResult,classes } = this.props;
        const project = this.props.match.params.project;
        return (
            <div>
                <CodeInputForm
                    query={historyResult.query}
                    historyCallback={(param: { query: string, type:string }) => fetchHistoryWorker({project, query: param.query, type:param.type})}
                    project={project}
                />
                <div className={classes.form}>
                    <RegularCard headerColor="blue" cardTitle="代码历史信息" >
                    <Switch>
                        <Route path='/demo/:project/codetrace/timeline' component={Timeline}/>
                    </Switch>
                    </RegularCard>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)<{}>(connect(mapStateToProps)(CodeTraceTab));