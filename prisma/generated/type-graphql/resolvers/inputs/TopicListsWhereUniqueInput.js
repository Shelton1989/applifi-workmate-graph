"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicListsWhereUniqueInput = class TopicListsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsWhereUniqueInput.prototype, "id", void 0);
TopicListsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicListsWhereUniqueInput", {
        isAbstract: true
    })
], TopicListsWhereUniqueInput);
exports.TopicListsWhereUniqueInput = TopicListsWhereUniqueInput;
