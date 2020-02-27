import React, { Component } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import ReactMarkdown from "react-markdown";

export class NoteMarkDown extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Modal trigger={<Button>MarkDown</Button>} basic size="large">
        <section>
          <h3>Note Markdown</h3>
          <ReactMarkdown source={this.props.note} />
        </section>
      </Modal>
    );
  }
}

export default NoteMarkDown;
