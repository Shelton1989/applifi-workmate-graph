"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsCreatelistsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicListsCreatelistsInput = class TopicListsCreatelistsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TopicListsCreatelistsInput.prototype, "set", void 0);
TopicListsCreatelistsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicListsCreatelistsInput", {
        isAbstract: true
    })
], TopicListsCreatelistsInput);
exports.TopicListsCreatelistsInput = TopicListsCreatelistsInput;
