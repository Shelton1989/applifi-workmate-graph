"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsUpdatelistsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicListsUpdatelistsInput = class TopicListsUpdatelistsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicListsUpdatelistsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicListsUpdatelistsInput.prototype, "push", void 0);
TopicListsUpdatelistsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicListsUpdatelistsInput", {
        isAbstract: true
    })
], TopicListsUpdatelistsInput);
exports.TopicListsUpdatelistsInput = TopicListsUpdatelistsInput;
