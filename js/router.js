import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import Home from './views/home';
import Details from './views/details';
import UserCollection from './user_collection';
import Form from './views/form';
import $ from 'jquery';

export default Backbone.Router.extend({

  routes: {
    '': 'showHome',
    'details/:id': 'showDetails',
    'add': 'showForm',
    'edit': 'editImg'
  },

  initialize(appElement) {
    this.appEl = appElement;
    this.users = new UserCollection();
  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

  render(component) {
    ReactDom.render(component, this.appEl);
  },

  start() {
    Backbone.history.start();
    return this;
  },

  selectImage(id) {
    this.goto(`details/${id}`);
  },

  showHome(id) {
    this.users.fetch().then(() => {
      this.render(
        <Home users={this.users.toJSON()} onSelect={this.selectImage.bind(this)} />
      );
    });
  },

  saveForm(userData) {
    this.users.create(userData);
    this.goto('');
  },

  showForm() {
    this.render(
      <Form
        onCancelClick={() => this.goto('')}
        onSubmit={(msg) => this.saveForm(msg)}
      />
    );
  },

  showDetails(id) {
    let user = this.users.get(id);
    if (!user) {
      this.users.fetch().then(() => {
        user = this.users.get(id);
        this.render(
          <Details user={user.toJSON()} />
        )
      });
    } else {
      this.render(
        <Details user={user.toJSON()} />
      )
    }
  },

  addUser() {
    this.users.fetch().then(() => {
      this.render(
        <Form></Form>
      );
    });
  }
  //
  // editImg() {
  //     this.render(
  //   )
  // },

});
