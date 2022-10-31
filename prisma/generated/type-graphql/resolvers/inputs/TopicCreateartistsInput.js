"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreateartistsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicCreateartistsInput = class TopicCreateartistsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TopicCreateartistsInput.prototype, "set", void 0);
TopicCreateartistsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreateartistsInput", {
        isAbstract: true
    })
], TopicCreateartistsInput);
exports.TopicCreateartistsInput = TopicCreateartistsInput;
