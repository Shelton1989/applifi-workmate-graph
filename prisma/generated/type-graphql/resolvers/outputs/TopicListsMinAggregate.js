"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LIST_TYPE_1 = require("../../enums/LIST_TYPE");
let TopicListsMinAggregate = class TopicListsMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LIST_TYPE_1.LIST_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsMinAggregate.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsMinAggregate.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TopicListsMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TopicListsMinAggregate.prototype, "updatedAt", void 0);
TopicListsMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TopicListsMinAggregate", {
        isAbstract: true
    })
], TopicListsMinAggregate);
exports.TopicListsMinAggregate = TopicListsMinAggregate;
