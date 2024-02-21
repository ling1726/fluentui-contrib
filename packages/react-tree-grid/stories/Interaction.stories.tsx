import * as React from 'react';
import {
  TreeGrid,
  TreeGridCell,
  TreeGridInteraction,
  TreeGridRow,
} from '@fluentui-contrib/react-tree-grid';
import {
  Button,
  Field,
  Input,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Toolbar,
  ToolbarButton,
  makeStyles,
  shorthands,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  cell: {
    ...shorthands.flex(1, 1, '100%'),
  },
});

export const Interaction = () => {
  const styles = useStyles();
  return (
    <TreeGrid aria-label="All meetings">
      <TreeGridRow
        subtree={
          <>
            <TreeGridRow>
              <TreeGridCell className={styles.cell} header>
                Monthly townhall, 10:00 AM to 11:00 AM
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <Menu>
                  <MenuTrigger disableButtonEnhancement>
                    <Button>Toggle menu</Button>
                  </MenuTrigger>

                  <MenuPopover>
                    <MenuList>
                      <MenuItem>New </MenuItem>
                      <MenuItem>New Window</MenuItem>
                      <MenuItem disabled>Open File</MenuItem>
                      <MenuItem>Open Folder</MenuItem>
                    </MenuList>
                  </MenuPopover>
                </Menu>
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <TreeGridInteraction
                  aria-roledescription="Interactive content"
                  aria-description="Interact with Enter, then leave with Escape"
                  aria-label="Type here"
                >
                  <Field label="Type here">
                    <Input />
                  </Field>
                </TreeGridInteraction>
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <Button>Agenda</Button>
                <Button>Notes</Button>
              </TreeGridCell>
            </TreeGridRow>
            <TreeGridRow>
              <TreeGridCell className={styles.cell} header>
                Monthly townhall, 10:00 AM to 11:00 AM
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <Menu>
                  <MenuTrigger disableButtonEnhancement>
                    <Button>Toggle menu</Button>
                  </MenuTrigger>

                  <MenuPopover>
                    <MenuList>
                      <MenuItem>New </MenuItem>
                      <MenuItem>New Window</MenuItem>
                      <MenuItem disabled>Open File</MenuItem>
                      <MenuItem>Open Folder</MenuItem>
                    </MenuList>
                  </MenuPopover>
                </Menu>
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <TreeGridInteraction
                  aria-roledescription="Interactive content"
                  aria-description="Interact with Enter, then leave with Escape"
                  aria-label="Type here"
                >
                  <Field label="Type here">
                    <Input />
                  </Field>
                </TreeGridInteraction>
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <TreeGridInteraction
                  aria-roledescription="Interactive content"
                  aria-description="Interact with Enter, then leave with Escape"
                  aria-label="Extra Actions"
                >
                  <Toolbar>
                    <ToolbarButton>Agenda</ToolbarButton>
                    <ToolbarButton>Notes</ToolbarButton>
                  </Toolbar>
                </TreeGridInteraction>
              </TreeGridCell>
            </TreeGridRow>
          </>
        }
      >
        <TreeGridCell className={styles.cell} header>
          Today
        </TreeGridCell>
        <TreeGridCell className={styles.cell} aria-colspan={3}>
          <Button>Header action</Button>
        </TreeGridCell>
      </TreeGridRow>
      <TreeGridRow
        subtree={
          <>
            <TreeGridRow>
              <TreeGridCell className={styles.cell} header>
                Weekly summary #2, 2:30 PM to 3:30 PM
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <Button>Chat with participants</Button>
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <Button>View recap</Button>
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <Button>Agenda and notes</Button>
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <Button>4 tasks</Button>
              </TreeGridCell>
            </TreeGridRow>
            <TreeGridRow>
              <TreeGridCell className={styles.cell} header>
                Mandatory training #1, 9:00 AM to 10:00 AM
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <Button>Chat with participants</Button>
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <Button>View recap</Button>
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <Button>Agenda and notes</Button>
              </TreeGridCell>
            </TreeGridRow>
            <TreeGridRow>
              <TreeGridCell className={styles.cell} header>
                Meeting with John, 10:15 AM to 11:15 AM
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <Button>Chat with participants</Button>
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <Button>View recap</Button>
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <Button>Agenda and notes</Button>
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <Button>2 tasks</Button>
              </TreeGridCell>
              <TreeGridCell className={styles.cell}>
                <Button>Transcript</Button>
              </TreeGridCell>
            </TreeGridRow>
          </>
        }
      >
        <TreeGridCell className={styles.cell} header>
          Last week
        </TreeGridCell>
        <TreeGridCell className={styles.cell} aria-colspan={5}>
          <Button>Header action</Button>
        </TreeGridCell>
      </TreeGridRow>
    </TreeGrid>
  );
};
