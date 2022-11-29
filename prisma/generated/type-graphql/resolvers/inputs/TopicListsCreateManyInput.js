"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicListsCreatelistsInput_1 = require("../inputs/TopicListsCreatelistsInput");
const LIST_TYPE_1 = require("../../enums/LIST_TYPE");
let TopicListsCreateManyInput = class TopicListsCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LIST_TYPE_1.LIST_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsCreateManyInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsCreateManyInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsCreatelistsInput_1.TopicListsCreatelistsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsCreatelistsInput_1.TopicListsCreatelistsInput)
], TopicListsCreateManyInput.prototype, "lists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TopicListsCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TopicListsCreateManyInput.prototype, "updatedAt", void 0);
TopicListsCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicListsCreateManyInput", {
        isAbstract: true
    })
], TopicListsCreateManyInput);
exports.TopicListsCreateManyInput = TopicListsCreateManyInput;
