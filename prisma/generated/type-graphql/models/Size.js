"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Size = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SIZE_REGION_1 = require("../enums/SIZE_REGION");
const SizeCount_1 = require("../resolvers/outputs/SizeCount");
let Size = class Size {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Size.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Size.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SIZE_REGION_1.SIZE_REGION, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Size.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Size.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Size.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Size.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCount_1.SizeCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeCount_1.SizeCount)
], Size.prototype, "_count", void 0);
Size = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Size", {
        isAbstract: true
    })
], Size);
exports.Size = Size;
