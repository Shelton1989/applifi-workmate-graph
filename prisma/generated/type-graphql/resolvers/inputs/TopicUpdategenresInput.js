"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpdategenresInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicUpdategenresInput = class TopicUpdategenresInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicUpdategenresInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicUpdategenresInput.prototype, "push", void 0);
TopicUpdategenresInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpdategenresInput", {
        isAbstract: true
    })
], TopicUpdategenresInput);
exports.TopicUpdategenresInput = TopicUpdategenresInput;
