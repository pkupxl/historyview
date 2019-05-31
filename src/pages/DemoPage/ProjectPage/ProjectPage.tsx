import * as React from 'react';
import CodeTraceTab from './CodeTraceTab';
import { Route, RouteComponentProps, Switch } from 'react-router';


interface ProjectPageRouteProps {
    project: string;
    tab: TabType;
}

type TabType = 'diagram' | 'graph' | 'document' | 'codetrace';

class ProjectPage extends React.Component<RouteComponentProps<ProjectPageRouteProps>> {
  render() {

    return (
      <div>
        <Switch>
            <Route path="/demo/:project/codetrace" component={CodeTraceTab}/>
        </Switch>
      </div>
    );
  }
}

export default ProjectPage;