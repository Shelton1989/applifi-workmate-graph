"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreategenresInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicCreategenresInput = class TopicCreategenresInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TopicCreategenresInput.prototype, "set", void 0);
TopicCreategenresInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreategenresInput", {
        isAbstract: true
    })
], TopicCreategenresInput);
exports.TopicCreategenresInput = TopicCreategenresInput;
