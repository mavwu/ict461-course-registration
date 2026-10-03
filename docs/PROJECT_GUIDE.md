# ICT461 Course Registration: implementation guide

A semantic, responsive course-registration interface with labelled controls, client-side validation, and an assignment reflection.

## Scope

**Repository role:** Coursework frontend.

Validation and confirmation are browser behavior; there is no university registration database or authoritative enrolment service.

## Local evaluation

Run a static server from the repository root:

```sh
python -m http.server 4173
```

Open `http://localhost:4173` and select the relevant HTML page or variant directory. No build step is required for plain HTML/CSS/JavaScript. Use a server when scripts fetch local content; opening a file directly can produce different behavior.

## Code map

| Path | Responsibility |
| --- | --- |
| `index.html` | Page or browser application entry |
| `script.js` | Browser interaction behavior |
| `styles.css` | Presentation and responsive styles |

## Walkthrough

Submit empty and invalid fields, complete a valid sample registration, and inspect keyboard navigation and the confirmation state.

## Verification

No meaningful automated application check was established from the reviewed manifest. Evaluate the walkthrough with synthetic data and record the commit, environment, and result. For a static site, inspect narrow/wide layouts, keyboard focus, links, forms, and console errors.

## Evidence for a case study

Describe this repository as a **coursework frontend**. A useful case study explains the problem above, traces the walkthrough to its source, names a concrete implementation decision, and records a repeatable evaluation. Separate implemented behavior from roadmap work. Capture screenshots using synthetic data and identify the demonstrated commit.
