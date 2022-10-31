"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpdatepublishersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicUpdatepublishersInput = class TopicUpdatepublishersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicUpdatepublishersInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicUpdatepublishersInput.prototype, "push", void 0);
TopicUpdatepublishersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpdatepublishersInput", {
        isAbstract: true
    })
], TopicUpdatepublishersInput);
exports.TopicUpdatepublishersInput = TopicUpdatepublishersInput;
