import * as React from 'react';
import styles from './styles.scss';

interface IProps {
  children?: React.ReactNode;
}

interface ITabProps {
  name: string;
  initialActive?: boolean;
  heading: () => string | JSX.Element;
}

interface ITabsContext {
  activeName?: string;
  handleTabClick?: (name: string, content: React.ReactNode) => void;
}

const TabsContext = React.createContext<ITabsContext>({});

const Tabs = (props: IProps) => {
  const { children } = props;
  const [activeName, setActiveName] = React.useState('');
  const [content, setContent] = React.useState<React.ReactNode>(null);
  const handleTabClick = (name: string, content: React.ReactNode) => {
    setActiveName(name);
    setContent(content);
  };

  return (
    <TabsContext.Provider
      value={{
        activeName,
        handleTabClick,
      }}
    >
      <ul className={styles.tabs}>{children}</ul>
      <div>{content}</div>
    </TabsContext.Provider>
  );
};

const Tab: React.FC<ITabProps> = props => (
  <TabsContext.Consumer>
    {(context: ITabsContext) => {
      if (!context.activeName && props.initialActive) {
        if (context.handleTabClick) {
          context.handleTabClick(props.name, props.children);
          return null;
        }
      }
      const activeName = context.activeName
        ? context.activeName
        : props.initialActive
          ? props.name
          : '';
      const handleTabClick = () => {
        if (context.handleTabClick) {
          context.handleTabClick(props.name, props.children);
        }
      };
      return (
        <li
          onClick={handleTabClick}
          className={props.name === activeName ? styles.active : ''}
        >
          {props.heading()}
        </li>
      );
    }}
  </TabsContext.Consumer>
);

Tabs.Tab = Tab;

export default Tabs;
