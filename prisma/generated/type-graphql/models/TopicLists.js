"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicLists = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LIST_TYPE_1 = require("../enums/LIST_TYPE");
let TopicLists = class TopicLists {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicLists.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LIST_TYPE_1.LIST_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicLists.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicLists.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TopicLists.prototype, "lists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TopicLists.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TopicLists.prototype, "updatedAt", void 0);
TopicLists = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TopicLists", {
        isAbstract: true
    })
], TopicLists);
exports.TopicLists = TopicLists;
