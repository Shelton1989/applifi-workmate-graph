"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreateauthorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicCreateauthorsInput = class TopicCreateauthorsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TopicCreateauthorsInput.prototype, "set", void 0);
TopicCreateauthorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreateauthorsInput", {
        isAbstract: true
    })
], TopicCreateauthorsInput);
exports.TopicCreateauthorsInput = TopicCreateauthorsInput;
