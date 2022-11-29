"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LIST_TYPE_1 = require("../../enums/LIST_TYPE");
let TopicListsMaxAggregate = class TopicListsMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LIST_TYPE_1.LIST_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsMaxAggregate.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsMaxAggregate.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TopicListsMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TopicListsMaxAggregate.prototype, "updatedAt", void 0);
TopicListsMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TopicListsMaxAggregate", {
        isAbstract: true
    })
], TopicListsMaxAggregate);
exports.TopicListsMaxAggregate = TopicListsMaxAggregate;
