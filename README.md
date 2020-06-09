# Factor UI

[![Build Status](https://travis-ci.com/mozilla-it/factor-ui.svg?branch=master)](https://travis-ci.com/mozilla-it/factor-ui)

## Project description

This will be a central repository for internally shared templates and components within Mozilla. This README will be the central location for all documentation relating to our internal components.

This project is intended to be a helpful "bootstrapped" kickstarter for all internal applications, providing out of the box internal themes and styles while allowing for flexibility to each individual application.

## Installation

Run the following command in your terminal

```
npm install --save @mozilla/factor-ui
```

## Templates

#### Include

Include this in whichever VueJS component you wish to use the template.

In component import

```
<template>
  <FactorBlockTemplate>
    <div slot="nav" >
      <!-- Nav content -->
    </div>
    <div slot="profile">
      <!-- Profile content -->
    </div>
    <div slot="main">
      <!-- Main content -->
    </div>
    <div slot="footer-links">
      <!-- Links in footer content -->
    </div>
  </FactorBlockTemplate>
</template>

<script>
import { FactorBlockTemplate } from '@mozilla/factor-ui';
import '@mozilla/factor-ui/dist/lib/factor.css';

export default {
  components: {
    FactorBlockTemplate
  },
}
</script>
```

This works the same with each of the different templates: FactorBlockTemplate, FactorFlowTemplate, FactorNavTemplate

#### Api

| Property        | Type   | Description                                 |
| --------------- | ------ | ------------------------------------------- |
| searchBarConfig | Object | Object of configurations for the search bar |

searchBarConfig

```
{
  handler: [Function] // Function for handling input submit
  onKeyUp: [Function] // Function for handling input "keyup" event
  onDropdownClicked: [Function(item)] // Function for handling when dropdown event item clicked
  onClearQuery: [Function] // Function for handling what happens when 'x' is clicked in search box
  label: [String] // String that acts like a placeholder when text is not entered in box
  value: [String] // Value that input starts out with
  suggestions: [Array({label: 'text', ...})] // List of items that would go in the suggestions list.
                                                Label is necessary for this list as it is the display text for the item.
}
```

#### Slots

| Name         | Type         | Area                                          |
| ------------ | ------------ | --------------------------------------------- |
| logo         | HTML Element | Upper left logo                               |
| nav          | HTML Element | Upper right nav area next to the profile area |
| profile      | HTML Element | Upper right profile area                      |
| main         | HTML Element | All content between header and footer         |
| footer-links | HTML Element | List of footer links                          |

### Block template

![Block Template](./src/assets/template1-layout.jpg)

### Flow template

![Flow Template](./src/assets/template2-layout.jpg)

### Nav Template

![Nav Template](./src/assets/template3-layout.jpg)

## Components

### Include

Include this in whichever VueJS component you wish to use the template.

In component import

```
<template>
  <FactorComponent />
</template>

<script>
import { FactorComponent } from '@mozilla/factor-ui';
import '@mozilla/factor-ui/dist/lib/factor.css';

export default {
  components: {
    FactorComponent
  },
}
</script>
```

### Components

| Name            | Description                                          |
| --------------- | ---------------------------------------------------- |
| FactorFooter    | Footer component for layout                          |
| FactorHeader    | Header component for layout                          |
| FactorIcon      | Component to serve up all icons in templates         |
| FactorPanel     | Component to contain any block contents in templates |
| FactorSearchBar | Component for search bar in header and anywhere else |

### Properties/Slots

#### FactorFooter

Slots:

- Links:

```
<FactorFooter>
  <ul class="footerlinks" slot="links">
    <!-- Insert links -->
  </ul>
</FactorFooter>
```

#### FactorHeader

Properties:

| Name            | Type/Default  | Description                              |
| --------------- | ------------- | ---------------------------------------- |
| hideSearchBar   | Boolean/false | determine whether to show the search bar |
| searchBarConfig | Object/null   | Config object for FactorSearchBar        |
| noLogo          | Boolean/false | Determine whether to hide logo           |

Slots:

- Logo:

```
<FactorHeader>
  <img class="header" slot="logo" />
</FactorHeader>
```

- Nav:

```
<FactorHeader>
  <ul class="nav" slot="nav">
    <!-- Insert nav items -->
  </ul>
</FactorHeader>
```

- Profile:

```
<FactorHeader>
  <div class="profile" slot="profile">
    <!-- Insert profile content -->
  </div>
</FactorHeader>
```

#### FactorIcon

Properties:

| Name   | Type/Default | Description                    |
| ------ | ------------ | ------------------------------ |
| id     | String       | Name of icon to use            |
| width  | Number       | The size in width of the icon  |
| height | Number       | The size in height of the icon |

#### FactorPanel

Properties:

| Name         | Type/Default  | Description                                            |
| ------------ | ------------- | ------------------------------------------------------ |
| fullContent  | Boolean/false | Determine whether should have inner padding            |
| fullOnMobile | Boolean/false | Determine whether panel should be full width on mobile |
| title        | String/''     | Title of panel                                         |
| hideContent  | Boolean/false | Determine whether to hide content inside panel         |

Slots:

- Header:

```
<FactorPanel>
  <div class="header" slot="header">
    <!-- Insert header content -->
  </div>
</FactorPanel>
```

- Content:

```
<FactorPanel>
  <div class="content" slot="content">
    <!-- Insert 'content' content -->
  </div>
</FactorPanel>
```

#### FactorSearchBar

Properties:

| Name              | Type/Default | Description                         |
| ----------------- | ------------ | ----------------------------------- |
| searchBarHandler  | Function     | Handler for when input is submitted |
| searchBarLabel    | String/''    | Placeholder text for input          |
| searchBarValue    | String/''    | Initial value for input             |
| searchBarDropdown | Array/\[\]]  | Array of drop down list items       |

Events:

| Name                        | Description                                |
| --------------------------- | ------------------------------------------ |
| keyup                       | Handler for every "keyup" on input         |
| clearQuery                  | Placeholder text for input                 |
| closeSearchBar              | event on submit wihout value               |
| search-bar-dropdown-clicked | Event when item is clicked or 'enter'ed on |

## Styles

### Colors

| Name            | code    |
| --------------- | ------- |
| --gray-10       | #f9f9fa |
| --gray-20       | #ededf0 |
| --gray-30       | #d7d7db |
| --gray-40       | #b1b1b3 |
| --gray-50       | #737373 |
| --gray-60       | #4a4a4f |
| --blue-60       | #4a4a4f |
| --green-80      | #006504 |
| --white         | #fff    |
| --black         | #000    |
| --light-red     | #f5d8e1 |
| --neon-red      | #ff0039 |
| --duck-egg-blue | #f2fcfd |
| --charcoal-gray | #38383d |
| --true-green    | #12bc00 |

### Icons

<p align="center">
  <span>activity</span>
  ![activity](./src/assets/svg/activity.svg)
</p>
<p align="center">
  <span>at-sign</span>
  ![at-sign](./src/assets/svg/at-sign.svg)
</p>
<p align="center">
  <span>bell</span>
  ![bell](./src/assets/svg/bell.svg)
</p>
