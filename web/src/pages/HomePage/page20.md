## TESTING

<div className="aside py-4">
Testing is a very important part of application development. Unfortunately, in some cases getting simple test to work correctly can be a challengs. While normal testing in RedwoodJS is typically easy, in some cases it can be overwhelming to overcome technical hurdles.

In this application case, the use of loading Markdown files while using the Vite bundler, causes Jest test errors that are not easy to overcome.

We suggest that the developer determine whether is better to alter the application architecture to allow test to be written, or to not include tests for certain parts of the code than can not be reasonably tested.

**In this case we have decided that using Markdown content files is more important than the overhead of testing these components.**
</div>
1. normal method to run all tests
    - yarn rw test
